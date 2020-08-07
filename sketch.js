var m_r,f_r

function setup() {
  createCanvas(800,400);
  f_r=createSprite(400, 200, 40, 40);
  m_r=createSprite(200,200,40,40)
  f_r.shapeColor="blue"
  m_r.shapeColor="blue"
  m_r.debug=true
  f_r.debug=true
}

function draw() {
  background(255,255,255); 
  m_r.y=World.mouseY
  m_r.x=World.mouseX
  if((m_r.x-f_r.x<m_r.width/2+f_r.width/2)
  &&(f_r.x-m_r.x<f_r.width/2+m_r.width/2)
  &&(m_r.y-f_r.y<m_r.width/2+f_r.width/2)
  &&(f_r.y-m_r.y<f_r.width/2+m_r.width/2)) 
  {
    f_r.shapeColor="purple"
    m_r.shapeColor="purple"
  }
  else{
    f_r.shapeColor="blue"
    m_r.shapeColor="blue"
  }
  drawSprites();
}