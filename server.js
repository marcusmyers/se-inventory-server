var http = require('http');
var os   = require('os');
var jf   = require('jsonfile');
var express = require('express');
var serialNumber = require('serial-number');
var app  = express();

var conffile = './config/server.json';
var datafile = './data/db.json';
