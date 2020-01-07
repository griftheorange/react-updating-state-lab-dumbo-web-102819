// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component {

    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
                resolution: '1080p'
            }
        }
    }

    handleBitClick = (evt) => {
        this.setState((prev) => {
            let newState = {...prev}
            newState["settings"]["bitrate"] = 12
            return newState
        })
    }

    handleResClick = (evt) => {
        this.setState((prev) => {
            let newState = {...prev}
            newState["settings"]["video"]["resolution"] = '720p'
            return newState
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleBitClick}className="bitrate"></button>
                <button onClick={this.handleResClick}className="resolution"></button>
            </div>
        );
    }
}

export default YouTubeDebugger;