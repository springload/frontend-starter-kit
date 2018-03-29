import { initErrorTracking, social, errors } from '../api/analytics';

describe('analytics', () => {
    let gaSpy;

    beforeEach(() => {
        gaSpy = jest.fn();
        global.ga = gaSpy;
    });

    describe('#initErrorTracking', () => {
        let onerrorSpy;

        beforeEach(() => {
            onerrorSpy = jest.fn();
            global.onerror = onerrorSpy;

            initErrorTracking();
        });

        it('exists', () => {
            expect(initErrorTracking).toBeDefined();
        });

        it('captures errors with onerror', () => {
            global.onerror('Test', 'script.js', 5, 5);
            expect(gaSpy).toHaveBeenCalledTimes(1);
        });

        it('preserves previous window.onerror callback', () => {
            global.onerror('Test', 'script.js', 5, 5);
            expect(onerrorSpy).toHaveBeenCalledTimes(1);
        });

        it('ignores "Script error." errors', () => {
            global.onerror('Script error.', 'script.js', 5, 5);
            expect(gaSpy).not.toHaveBeenCalled();
        });

        it('contains error message', () => {
            global.onerror('Test', 'script.js', 5, 5);
            const params = { exDescription: 'script.js: Test (5:5)', exFatal: false };
            expect(gaSpy).lastCalledWith('send', 'exception', params);
        });
    });

    describe('social', () => {
        it('exists', () => {
            expect(social).toBeDefined();
        });

        describe('#share', () => {
            it('exists', () => {
                expect(social.share).toBeDefined();
            });

            it('captures share events', () => {
                social.share('facebook', 'http://example.com');
                expect(gaSpy).lastCalledWith('send', 'social', 'facebook', 'share', 'http://example.com');
            });
        });
    });

    describe('errors', () => {
        it('exists', () => {
            expect(errors).toBeDefined();
        });

        describe('#ajax', () => {
            it('exists', () => {
                expect(errors.ajax).toBeDefined();
            });

            it('captures AJAX errors', () => {
                errors.ajax(400, '/api/v1/bananas');
                const params = { exDescription: 'AJAX error: 400 /api/v1/bananas', exFatal: false };
                expect(gaSpy).lastCalledWith('send', 'exception', params);
            });
        });
    });
});
