const Promise = require('bluebird');
const mongoose = require('mongoose');
const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');

/**
 * Post Schema
 * modify PostSchema
 * 25Dec2017 modified by John
 * old Schema is like:
 * title: String
 * content: String
 * createdAt: String
 *
 * new Schema is like:   // mongoDB will create a default _id field for each record
 * title: String
 * content: String
 * createdAt: String
 * authorID: long
 * source: String
 * rating: float
 * category: String
 * picAddr: String
 */
const PostSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },
  content: {
    type: String
  },
  createdAt: {
    type: String,
    default: ""
  },
  authorId: {
    type: Number,
    default: 0
  },
  source: {
    type: String
  },
  rating: {
    type: Number,
    default: 5.0
  },
  category: {
    type: String,
    default: "Education"
  },
  picAddr: {
    type: String,
    default: "NO_PICTURE"
  }
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
PostSchema.method({
});

/**
 * Statics
 */
PostSchema.statics = {
  /**
   * Get post
   * @param {ObjectId} id - The objectId of post.
   * @returns {Promise<Post, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then((post) => {
        if (post) {
          return post;
        }
        const err = new APIError('No such post exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List posts in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of posts to be skipped.
   * @param {number} limit - Limit number of posts to be returned.
   * @returns {Promise<Post[]>}
   */
  list({ skip = 0, limit = 50 } = {}) {
    console.log(this.find());
    //const response = this.find()
    var promise = this.find()
      .sort({ createdAt: -1 })
      .skip(+skip)
      .limit(+limit)
      .exec();

    console.log(    this.find()
      .sort({ createdAt: -1 })
      .skip(+skip)
      .limit(+limit)
      .exec());

    console.log();
    console.log('in post.model.js -> list');

    console.log(promise);

    return this.find()
      .sort({ createdAt: -1 })
      .skip(+skip)
      .limit(+limit)
      .exec();
  }
};

/**
 * @typedef Post
 */
//
var Post = mongoose.model('Post', PostSchema);
module.exports = Post;
//export default mongoose.model('Post', PostSchema);



