var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
    it('should exist', () => {
        expect(Countdown).toExist();
    });
});

describe('handleSetCountdown', () => {
    it('should set state to started and countdown', (done) => {
        var countdown = TestUtils.renderIntoDocument(<Countdown/>);
        countdown.handleSetCountdown(10);

        expect(countdown.state.count).toBe(10);
        expect(countdown.state.countdownStatus).toBe('started');

        setTimeout(() => {
            expect(countdown.state.count).toBe(9);
            done();
        }, 1001)
    });

    it('should set state to started and check if count is not negtive number', (done) => {
        var countdown = TestUtils.renderIntoDocument(<Countdown/>);
        countdown.handleSetCountdown(1);

        expect(countdown.state.count).toBe(1);
        expect(countdown.state.countdownStatus).toBe('started');

        setTimeout(() => {
            expect(countdown.state.count).toBe(0);
            done();
        }, 3001)
    });
});

describe('handleStatusChange', () => {
    it('should change the status to stopped and clear the count and timer', (done) => {
        var countdown = TestUtils.renderIntoDocument(<Countdown/>);
        countdown.handleSetCountdown(10);
        setTimeout(() => {
            countdown.handleStatusChange('stopped');
            expect(countdown.state.count).toBe(0);
            expect(countdown.timer).toBe(undefined);
            done();
        }, 2001)
    });

    it('should change the status to paused and count should stop ', (done) => {
        var countdown = TestUtils.renderIntoDocument(<Countdown/>);
        countdown.handleSetCountdown(10);
        setTimeout(() => {
            countdown.handleStatusChange('paused');
            expect(countdown.state.count).toBe(8);
            done();
        }, 2001)

        setTimeout(() => {
            expect(countdown.state.count).toBe(8);
            expect(countdown.timer).toNotBe(undefined);
            done();
        }, 2001)
    });
});
