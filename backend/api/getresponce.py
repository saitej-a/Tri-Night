import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from .intents import intents
tags=[]
patterns=[]
for intent in intents:
    for pattern in intent['patterns']:
        patterns.append(pattern)
        tags.append(intent['tag'])
vector=TfidfVectorizer()
x=vector.fit_transform(patterns)
y=tags
model=LogisticRegression()
model.fit(x,y)
