class PagesController < ApplicationController
  def about
     @title = "About"
  end

  def projects
     @title = "Projects"
  end

  def contact
     @title = "Contact"
  end
end
