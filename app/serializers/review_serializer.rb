class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :user_id, :game_id
end
