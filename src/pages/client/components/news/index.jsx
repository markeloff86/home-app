import React from 'react'
import Websocket from 'react-websocket'

import { default as NewsItem } from './news-item'

import style from './style.css'


class Component extends React.Component {

    handleData(data) {
        console.log('data', data);
    }
    handleOpen()  {
        console.log("connected:)");
    }
    handleClose() {
        console.log("disconnected:(");
    }
    sendMessage(message){
        this.refWebSocket.sendMessage(message);
    }

    render() {
        return (
            <div className={style.container}>
                <NewsItem/>
                <NewsItem/>
                <button onClick={() => this.sendMessage(`{"hi": {"ver": "1"}}`)} >Send Message</button>
                <Websocket
                    url='ws://84.201.159.4:6060/v0/channels?apikey=AQEAAAABAAD_rAp4DJh05a1HAwFT3A6K'
                    onMessage={this.handleData}
                    onOpen={this.handleOpen}
                    onClose={this.handleClose}
                    ref={Websocket => {
                        this.refWebSocket = Websocket;
                    }}/>
                    debug={true}
                />
            </div>
        )
    }
}

export default Component;
