"use strict";

const AWS = require("aws-sdk");

const fetchItem = async (Event) => {

   const dynamodb = new AWS.DynamoDB.DocumentClient();
   const {id} = Event.pathParameters

   let item;

   try {
    const result = await dynamodb.get({
        TableName: "ItemTableNew",
        key: {id}
    }).promise();

    item = result.Item;
    
    } catch (error) {
        console.log(error)
    }

    return {
        statecode: 400,
        body: JSON.stringify(item),
    }

    module.exports =  {
        handler: fetchItems,
    };
}