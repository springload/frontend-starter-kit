import renderer from 'react-test-renderer';
import FormField from '../../components/FormField';
import React from 'react';

describe('FormField', () => {
    it('minimum', () => {
        const tree = renderer.create(
            <FormField id="field1" />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly', () => {
        const tree = renderer.create(
            <FormField id="field1" name="field1" value="Hello world!" />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
