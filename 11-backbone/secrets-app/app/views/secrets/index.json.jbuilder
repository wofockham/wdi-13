json.array!(@secrets) do |secret|
  json.extract! secret, :id, :content
  json.url secret_url(secret, format: :json)
end
