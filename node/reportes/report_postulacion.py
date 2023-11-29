import mysql.connector
import pandas as pd
import csv

# Conectarse a la base de datos MySQL
connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="admin",
    database="mydb"
)

# Ejecutar una consulta SQL
cursor = connection.cursor()
#cursor.execute("SELECT * FROM postulacion LEFT JOIN estudiante ON postulacion.rut_estudiante = estudiante.rut_estudiante LEFT JOIN periodo ON estudiante.id_periodo = periodo.id_periodo")
cursor.execute("SELECT * FROM postulacion LEFT JOIN ramo on postulacion.id_ramo = ramo.id_ramo LEFT JOIN periodo ON periodo.id_periodo = ramo.id_periodo")

column_names = cursor.column_names
resultados = cursor.fetchall()



# Convertir los resultados de la consulta SQL a un DataFrame de Pandas

df = pd.DataFrame(resultados, columns=column_names)
datos_estudiantes_report=df[["id_postulacion", "rut_estudiante","nombre_ramo", "semestre_periodo", "estado_postulacion", "horas_solicitud_ayudantia"]]

#elimina el limite de las columnas y filas mostradas
#pd.options.display.max_columns=None
#pd.options.display.max_rows=None


# Mostrar el DataFrame de Pandas
with open("postulacion_tabla.csv", "w") as f:
    f.write(str(datos_estudiantes_report))

datos_estudiantes_report.to_csv("reporte_postulacion.csv")

connection.close()