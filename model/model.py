import pandas as pd
import numpy as np
import pandas as pd

UAL_df = pd.read_csv('usersAnimeListFull.csv')
UAL_df = UAL_df.drop('Unnamed: 0', axis=1).reset_index(drop = True)
print(UAL_df)
print(UAL_df.columns)
print(UAL_df.dtypes)
UAL_df = UAL_df.head(100000)
print('Hot encoding')
encoded_df =UAL_df[['user_id']].join(pd.get_dummies(UAL_df['anime_title'])).groupby('user_id').max().drop('"0"', axis = 1)
print(encoded_df)

#mapeo y normalizacion

