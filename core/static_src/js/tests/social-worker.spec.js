import { buildFacebookLink, buildTwitterLink } from '../utils/social-worker';

describe('Social Worker', () => {
    describe('#buildFacebookLink', () => {
        it('exists', () => {
            expect(buildFacebookLink).toBeDefined();
        });

        it('Facebook sharing link is created', () => {
            expect(buildFacebookLink('http://www.example.com/')).toBe('https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.example.com%2F');
        });
    });

    describe('#buildTwitterLink', () => {
        it('exists', () => {
            expect(buildTwitterLink).toBeDefined();
        });

        it('Twitter sharing link is created', () => {
            expect(buildTwitterLink('Check this out!', 'https://www.springload.co.nz/')).toBe('https://twitter.com/intent/tweet/?&text=Check%20this%20out!&url=https%3A%2F%2Fwww.springload.co.nz%2F');
            expect(buildTwitterLink('Check this out!', 'https://www.springload.co.nz/', 'springloadnz')).toBe('https://twitter.com/intent/tweet/?&text=Check%20this%20out!&url=https%3A%2F%2Fwww.springload.co.nz%2F&via=springloadnz');
        });
    });
});
