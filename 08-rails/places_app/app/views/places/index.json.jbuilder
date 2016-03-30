json.array!(@places) do |place|
  json.extract! place, :id, :name, :address
  json.url place_url(place, format: :json)
end
