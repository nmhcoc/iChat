/**
 * Token.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    token:{
      type:'string',
      maxLength:200
    },
    userId:{
      type:'integer',
      unique:true
    },
    experied:{
      type:'datetime'
    },
    user:{
      model:'user'
    }
  }
};

