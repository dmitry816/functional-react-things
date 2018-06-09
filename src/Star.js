import React, { Component } from 'react';

const Star = ({ selected=false, onClick=f=>f }) =>
    <div className={(selected) ? 'star selected' : 'star'}
        onClick={onClick}>
    </div>
Star.protoTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func
}