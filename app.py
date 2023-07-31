# Import the dependencies.
import numpy as np
import datetime as dt

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify


#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///Resources/      .sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(autoload_with=engine)

# Save references to each table


#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Flask Routes
#################################################
@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/main<br/>"
        f"/api/v1.0/fires<br/>"
        f"/api/v1.0/precipitation<br/>"
    )
    
@app.route("/api/v1.0/main")
def tobs():
    # Create our session (link) from Python to the DB
    session = Session(engine)
    
    # Gather data

    session.close()
    
    # Create list and display
  
        
    return jsonify()

@app.route("/api/v1.0/fires")
def stations():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    # Gather data
    
    session.close()
    
    # Create list and display
    
    return jsonify()
    
@app.route("/api/v1.0/precipitation")
def precipitation():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    # Gather data

    session.close()

    # Create a dictionary and display

    return jsonify()


if __name__ == '__main__':
    app.run(debug=True)