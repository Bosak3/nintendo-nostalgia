class SessionsController < ApplicationController
    skip_before_action :authorized, only: :create
    def create
      byebug
    end
  
  end