export const $id = id => document.getElementById(id)
export const $$className = className =>Array.from(document.getElementsByClassName(className))
export const $$ = querySelector => Array.from(document.querySelectorAll(querySelector))
export const $ = querySelector => $$(querySelector)[0]
export const SCREEN = $id('screen')

