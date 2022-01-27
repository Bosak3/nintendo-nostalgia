class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :year, :genre, :image_url 
end
