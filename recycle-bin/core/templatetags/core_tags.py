from django import template
from django.template.loader_tags import do_include
from django.template.defaulttags import CommentNode
import json

register = template.Library()


@register.filter
def content_type(model):
    """
    Return the model name/"content type" as a string e.g BlogPage, NewsListingPage.
    Can be used with "slugify" to create CSS-friendly classnames
    Usage: {{ self|content_type|slugify }}
    """
    return model.__class__.__name__


@register.filter
def jsonify(some_dict):
    """
    Returns a JSON representation of a dictionary or list object
    """
    return json.dumps(some_dict)


class SetVarNode(template.Node):
    def __init__(self, var_name, var_value):
        self.var_name = var_name
        self.var_value = var_value

    def render(self, context):
        try:
            value = template.Variable(self.var_value).resolve(context)
        except template.VariableDoesNotExist:
            value = ""
        context[self.var_name] = value
        return u""


@register.tag(name='set')
def set_var(parser, token):
    """
    Implements Jinja2's set filter

    Usage: {% set var_name  = var_value %}
    """
    parts = token.split_contents()
    if len(parts) < 4:
        raise template.TemplateSyntaxError("'set' tag must be of the form:  {% set var_name  = var_value %}")
    return SetVarNode(parts[1], parts[3])


@register.tag('include_optional')
def do_include_maybe(parser, token):
    """
    A template helper to optionally include a template partial, and catch the
    exception if it fails.

    Source: http://stackoverflow.com/a/18951166/15690
    """
    bits = token.split_contents()
    if len(bits) < 2:
        raise template.TemplateSyntaxError(
            "%r tag takes at least one argument: "
            "the name of the template to be included." % bits[0])

    try:
        silent_node = do_include(parser, token)
    except template.TemplateDoesNotExist:
        # Django < 1.7
        return CommentNode()

    _orig_render = silent_node.render

    def wrapped_render(*args, **kwargs):
        try:
            return _orig_render(*args, **kwargs)
        except template.TemplateDoesNotExist:
            return CommentNode()
    silent_node.render = wrapped_render
    return silent_node


@register.simple_tag
def get_param_replace(request, field=None, value=None):
    """
    Cleans up the GET object through URL encoding, and replaces a value in it.

    Usage: {% get_param_replace(request, 'page', '3')  %}

    will output:
    page=3&rest=of&the=GET&string=here
    """
    dict_ = request.GET.copy()

    if field:
        dict_[field] = value

    return dict_.urlencode()
