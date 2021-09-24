const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

// Schema Only
const ReactionsSchema = new Schema(
    {
    
    reactionId: {
        type: Schema.Types.ObjectId,
        default: ()=> new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: 'You must add text for your reaction',
        trim: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: 'Must have username.',
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    }
    },
    {
    toJSON: {
        getters: true
    } 
    }
);

// ThoughtsSchema
const ThoughtsSchema = new Schema(
    {
    thoughtText: {
        type: String,
        required: 'You must add your thought, cannot be blank.',
        trim: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },
    username: {
        type: String,
        required: 'You must add your username',
        trim: true
    },
    
    reactions: [ReactionsSchema]
    },
    {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
    }
)

ThoughtsSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

// Array 
const Thoughts = model('Thoughts', ThoughtsSchema);

// Export 
module.exports = Thoughts;
