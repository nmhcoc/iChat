/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    username: {
      type: 'string',
      unique: true,
      required: true,
      maxLength: 25,
      alphanumeric: true
    },
    password: {
      type: 'string',
      unique: true,
      required: true,
      maxLength: 100
    },
    dob: {
      type: 'date',
    },
    gender: {
      type: 'boolean'
    },
    fullname: {
      type: 'string',
      maxLength: 50
    },
    phone:{
      type:'string',
      maxLength:11
    },
    addr:{
      type:'string',
      maxLength:255
    },
    email:{
      type:'email',
      maxLength:100
    },
    // token:{
    //   type:'string'
    // }
  }
};

