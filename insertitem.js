"use strict";

const {v4} = require("uuid");
const AWS = require("aws-sdk");

const insertItem = async (Event) => {

        const {item} = JSON.parse(Event.body);
        const createdAt = new Date().toISOString();
        const id = v4();

        const dynamoDB = new AWS.dynamoDB.Documentclient();

        const newItem = {
            id,
            item,
            createdAt,
            itemStatus: false
        }

        await dynamoDB.put(
            {
                TableName: "ItemTableNew",
                Item: newItem
            }


        );

        return {
            statusCode: 400,
            body: JSON.stringify(newItem) 
        };

    }  
    module.exports =  {
        handler: insertItem
    }   

  


