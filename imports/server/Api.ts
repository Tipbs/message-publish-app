import { Meteor } from 'meteor/meteor';
import fetch from 'node-fetch';

export const callApi = async (
  url: string,
  method: "get" | "post" | "put" | "delete",
  headers: {},
  body?: any
) => {
  try {
    const response: any = await fetch(url, {
      method: method, // *GET, POST, PUT, DELETE, etc.
      headers: headers,
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(body), // body data type must match "Content-Type" header
    });
    return await response;
  } catch (err: any) {
    console.log(err);
  }
};

export const sendMessageToMupi = async (message: string) => {
  const endpoint = process.env.MUPI_URL as string;
  const body = {
    message: message
  }
  const response = await callApi(endpoint + "/api/form", "post", { 'Content-Type': 'application/json' }, body);
  console.log(response)
  try {
    const responseJson = await response.json();
    if (response?.status !== 200) {
      console.log('Api Call failed');
      throw new Meteor.Error('Api Call failed');
    } else {
      console.log("Api Call failed");
    }
    return responseJson?.scrapingIds;
  } catch {
    console.log("Error in Api call function");
  }
  return [];
}

