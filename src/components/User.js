import React from 'react';

const User = (props) => { //создание стрелочной функции
    const {min, src, alt, name} = this.props;

    return (
        <a href="#" className={min ? "user min" : "user"}>
            <img src={src} alt={alt}></img>
            <div>{name}</div>
        </a>
    )
}

export default User;