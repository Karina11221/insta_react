import React, {Component} from 'react';
import Post from './Post'

export default class Posts extends Component {
    render() {// возвращает опеределенную верстку
        return (
            <div className="left">
                <Post src="https://avatars.mds.yandex.net/get-pdb/812271/3832b733-99e4-4d2d-a5be-72a9c7d1325d/s1200" alt="inst"/>
                <Post src="https://avatars.mds.yandex.net/get-pdb/69339/8accda2c-7daf-4c96-afb1-ec473ac4583e/s1200" alt="second"/>
            </div>
        )
    }
}