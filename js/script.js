// Copyright (c) 2020 Shanea Jaromay All rights reserved
//
// Created by: Shanea Jaromay
// Created on: March 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates volume of a pyramid.
 */
function calculateVolumeOfPyramid () {
  // input
  const lengthOfPyramid = parseInt(document.getElementById('length-of-pyramid').value)
  const widthOfPyramid = parseFloat(document.getElementById('width-of-pyramid').value)
  const heightOfPyramid = parseInt(document.getElementById('height-of-pyramid').value)

  // process
  const volumeOfPyramid = ( lengthOfPyramid * widthOfPyramid * heightOfPyramid ) / 3

  // output
  document.getElementById('volume').innerHTML = 'Volume is: ' + volumeOfPyramid + ' mm³'
}

