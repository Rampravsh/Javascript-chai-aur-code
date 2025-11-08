# Asynchronous Programming in JavaScript

This `index.js` file contains examples of asynchronous programming in JavaScript. It covers the following concepts:

## `setTimeout`

The `setTimeout` function is used to execute a function after a specified delay. This is a simple way to introduce asynchronicity into your code.

## Callbacks

Callbacks are functions passed as arguments to other functions. They are a fundamental concept in asynchronous JavaScript. The examples demonstrate:
- A simple callback function.
- "Callback hell," a situation where multiple nested callbacks make the code hard to read and maintain.

## Promises

Promises provide a cleaner way to handle asynchronous operations. A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. The examples cover:
- Creating a new Promise.
- Using `.then()` to handle a successful resolution.
- Using `.catch()` to handle a rejection.
- Chaining promises to execute a sequence of asynchronous operations.

## `fetch` API

The `fetch` API is a modern interface for fetching resources (e.g., across the network). It is promise-based, making it easy to integrate with other asynchronous code. The example shows how to fetch data from a public API.

## `async/await`

`async/await` is syntactic sugar built on top of promises, allowing you to write asynchronous code that looks and behaves more like synchronous code. This makes it easier to read and reason about. The example demonstrates how to use `async/await` to wait for a promise to resolve.
