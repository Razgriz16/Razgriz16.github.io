import mysql.connector
import pandas as pd


# Conectarse a la base de datos MySQL
connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="admin",
    database="mydb"
)
# Ejecutar una consulta SQL
cursor = connection.cursor()
cursor.execute("SELECT * FROM estudiante LEFT JOIN carrera ON estudiante.id_carrera = carrera.id_carrera")
column_names = cursor.column_names
resultados = cursor.fetchall()
# Convertir los resultados de la consulta SQL a un DataFrame de Pandas
df = pd.DataFrame(resultados, columns=column_names)
datos_estudiantes_report=df[["rut_estudiante", "nombres_estudiante", "apellido1_estudiante", "apellido2_estudiante", "nombre_carrera", "ppa_estudiante", "horas_ayudantia_estudiante"]]
#elimina el limite de las columnas y filas mostradas
#pd.options.display.max_columns=None
#pd.options.display.max_rows=None
"""
# Mostrar el DataFrame de Pandas
with open("estudiantes_tabla.csv", "w") as f:
    f.write(str(datos_estudiantes_report))
"""
    
datos=datos_estudiantes_report.to_csv("reporte_estudiantes.csv")
connection.close()



