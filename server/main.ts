import {loadParties} from './seed-parties.ts';
import {Meteor} from 'meteor/meteor';

Meteor.startup(loadParties);
