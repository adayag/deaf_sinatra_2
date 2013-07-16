get '/' do
  @grandma = params[:grandma]
  # Look in app/views/index.erb
  erb :index
end

post '/grandma' do
  if params[:user_input] == params[:user_input].downcase
    @grandma = "SPEAK UP YOU LITTLE RASCAL!"
  else
    @grandma = "NO NOT SINCE THE WAR!!!"
  end
  erb :index :layout => false 
end
