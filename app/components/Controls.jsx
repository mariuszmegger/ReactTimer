var React = require('react');

var Controls = React.createClass({
    propTypes: {
        countdownStatus:React.PropTypes.string.isRequired
    },
    render: function(){
        var {countdownStatus} = this.props;
        var renderStartStopButton = () => {
            if(countdownStatus === 'started'){
                return <button className="button secondary hallow">Pause</button>
            } else if(countdownStatus === 'paused'){
                return <button className="button primary hallow">Start</button>
            }
        }
        return(
            <div className="controls">
                {renderStartStopButton()}
                <button className="button alert hallow">Clear</button>
            </div>
        );
    }
})

module.exports = Controls;
