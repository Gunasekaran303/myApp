
/* Package JSON Import will be here */
import React, { Component } from 'react';
/* Package JSON Import will be here */

export default class ServiceCall extends Component
{

    static saveDetails(details)
    {
        debugger;
        return fetch("https://api.myjson.com/bins/uhyyc",{
            headers: {
                'Content-Type': 'application/json'
                },
            method: "PUT",
            body: JSON.stringify(details)
            }).then( (responseJson) => {
                return true;
        }).catch(error => {
            return false;
        });
    };

    static getDetails()
    {
        return fetch("https://api.myjson.com/bins/uhyyc").then( (response) => {
                return response.json();
            }).catch(error => {
                return [];
            });
    };
}