# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

console.log "Hello world"

items = ['beer', 'wine', 'spirits', 'mayonnnnnaisssssse']
fridge = 'full of booze'

# Backwards if statements
booze_lover = true if fridge == 'full of booze'

# English language conjunctives like 'and'
if fridge == 'full of booze' and items.length > 0
  well_stocked = true

# Functions require less typing
drinkBeer = ->
  console.log 'Glug glug glug'
  items.pop()

# Fancy loops
for item in items when item isnt 'spirits'
  console.log item

# One line loops
while items.length > 0 then drinkBeer()

# Ranges and backwards ranges
for i in [5..0]
  console.log i

# Functions with arguments
hello = (name) ->
  console.log "Hello #{name}" # Interpolation

hello 'World'

# Objects
fridge =
  beer: ['VB', 'Guinness', 'Tooths']
  chips: ['salt and vinegar', 'bbq']
  consume: () ->
    @beer.pop()

console.log fridge.consume()

range = [1..22]

$(document).ready ->
  console.log 'The document is ready'
  $('h1').on 'click', ->
    console.log 'You clicked the heading'
