"use strict";

const AWS = require("aws-sdk");

const fetchItems = async (Event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();

    let items;
    try {
        const result = await DynamoDB.scan({
            TableName: "ItemTableNew"
        }).promise();

        items = results.Items

    }catch (error) {

        console.log(error)
    }

    return {
        statusCode: 400,
        body: JSON.stringify(items),
    };

}

module.exports =  {
    handler: fetchItems,
};