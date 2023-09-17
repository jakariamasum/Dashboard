import React from 'react';

const Button = ({txtColor,bg,buttonWidth,text, bClor,bWidth}) => {
    const buttonStyle = {
        backgroundColor: bg,
        width: buttonWidth,
        height: '40px',
        color:txtColor , // You can adjust the text color as needed
        textAlign: 'center',
        lineHeight: '40px',
        cursor: 'pointer',
        borderRadius: '14px',
        borderColor: bClor,
        borderStyle: 'solid',
        borderWidth: bWidth,
    };
    return (
        <div style={buttonStyle}>
            {text}
        </div>
    );
};

export default Button;