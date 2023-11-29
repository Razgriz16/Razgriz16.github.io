from flask import Flask, send_file
import os

app = Flask(__name__)


# La función para generar el reporte
def generar_reporte_estudiante():
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
    datos_estudiantes_report = df[["rut_estudiante", "nombres_estudiante", "apellido1_estudiante", "apellido2_estudiante", "nombre_carrera", "ppa_estudiante", "horas_ayudantia_estudiante"]]

    # Generar el archivo CSV
    datos_estudiantes_report.to_csv("node/reportes/reporte_estudiantes.csv", index=False)

    connection.close()



# Ruta para generar el reporte
@app.route('/generar_reporte')
def generar_reporte():
    generar_reporte_estudiante()  # Llamar a la función para generar el reporte
    return send_file("reporte_estudiantes.csv", as_attachment=True)
if __name__ == '__main__':
    app.run(debug=True)
