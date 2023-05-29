"use strict";

const AWS = require("aws-sdk");

const updateItem = async (Event) => {

   const {itemStatus} = JSON.parse(Event.body);
   const {id} = Event.pathParameters

   const dynamodb = new AWS.DynamoDB.DocumentClient();

   await dynamodb.update({
        TableName: "ItemTableNew",
        key: {id},
        UpdateExpression: 'set itemStatus = :itemStatus',
        ExpressionAttributeValues: {
            ':itemStatus': 'itemStatus'
        },
        ReturnValues: "ALL_NEW"



   }).promise()

   return {
    statecode: 400,
        body: JSON.stringify(
            {msg: 'item updated'}
        ),

   };
}

module.exports = {
    handler:updateItem
}


    
   

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
