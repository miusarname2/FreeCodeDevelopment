# Flutter Platform Detection: Experimento en Project IDX

Aplicación Flutter de práctica que **detecta la plataforma en la que se ejecuta** y muestra una interfaz distinta según el caso: **Material Design** en Android y **Cupertino** en iOS. Fue creada como experimento en Project IDX (hoy Firebase Studio).

## Características

- Detección de plataforma con `dart:io` (`Platform.isIOS`).
- **Versión Material** (Android): `AppBar`, `Drawer` lateral, `FloatingActionButton` extendido, `BottomNavigationBar` con dos pestañas (Home y Search) y botón de "me gusta".
- **Versión Cupertino** (iOS): `CupertinoPageScaffold` con `CupertinoNavigationBar` y un texto centrado.
- Botón de "me gusta" que alterna entre corazón vacío y corazón rojo, tanto en el `AppBar` como en el botón flotante.
- Estado manejado con `StatefulWidget` y `setState`.
- Entorno de desarrollo reproducible con `.idx/dev.nix` (JDK 17, extensiones de Dart y Flutter, vistas previas web y Android).

## Tecnologías

| Tecnología | Detalle |
| --- | --- |
| Flutter | SDK con Dart `>=3.4.0 <4.0.0` |
| Dart | 3.4 o superior |
| Material y Cupertino | Widgets incluidos en Flutter |
| `cupertino_icons` | `^1.0.6` |
| `flutter_lints` | `^3.0.0` (desarrollo) |
| Project IDX | Configuración en `.idx/dev.nix` |

## Requisitos previos

- [Flutter SDK](https://docs.flutter.dev/get-started/install) (canal stable, con Dart 3.4 o superior)
- Android Studio o Xcode, según la plataforma de destino
- Un emulador, simulador o dispositivo físico

Para verificar tu entorno:

```bash
flutter doctor
```

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/<tu-usuario>/flutter_exp_idx.git
   cd flutter_exp_idx
   ```

2. Instala las dependencias:

   ```bash
   flutter pub get
   ```

## Ejecución

En un emulador o dispositivo Android:

```bash
flutter run -d android
```

En un simulador o dispositivo iOS (solo macOS):

```bash
flutter run -d ios
```

Para ver todos los dispositivos disponibles:

```bash
flutter devices
```

> **Nota sobre web:** el proyecto incluye la carpeta `web/` y una vista previa web en `.idx/dev.nix`, pero la app usa `dart:io`, cuya clase `Platform` **no está soportada en navegadores**. Ejecutarla en web provoca un error en tiempo de ejecución. Ver [Limitaciones conocidas](#limitaciones-conocidas).

## Estructura del proyecto

```
flutter_exp_idx/
├── lib/
│   └── main.dart          # Toda la lógica y la interfaz de la app
├── test/
│   └── widget_test.dart   # Test por defecto de Flutter
├── android/               # Proyecto nativo Android
├── web/                   # Archivos de la plataforma web
├── .idx/
│   └── dev.nix            # Entorno de Project IDX
├── pubspec.yaml           # Dependencias y configuración
└── analysis_options.yaml  # Reglas de análisis estático
```

## Cómo funciona

`MyHomePage` decide qué interfaz mostrar en su método `build`:

```dart
@override
Widget build(BuildContext context) {
  return Platform.isIOS ? VersionCupertino() : VersionMaterial();
}
```

- `VersionMaterial()` construye un `Scaffold` con navegación inferior, menú lateral y botón de "me gusta".
- `VersionCupertino()` construye un `CupertinoPageScaffold` con barra de navegación estilo iOS.

## Pruebas

```bash
flutter test
```

> El test incluido es el de ejemplo del contador que genera Flutter por defecto. **No corresponde a esta app y falla**. Ver [Limitaciones conocidas](#limitaciones-conocidas).

## Limitaciones conocidas

- **No funciona en web:** `Platform.isIOS` de `dart:io` lanza una excepción en navegadores. Para soportar web se puede usar `defaultTargetPlatform` de `package:flutter/foundation.dart`, que es multiplataforma.
- **Título fijo:** la versión Material siempre muestra "Detected Android!", aunque se ejecute en otra plataforma que no sea iOS (por ejemplo, escritorio).
- **Menú y pestañas sin lógica:** los ítems del `Drawer` tienen un `onTap` vacío y la pestaña "Search" solo cambia el texto mostrado.
- **Test desactualizado:** `test/widget_test.dart` busca un contador y un ícono `+` que no existen, y usa `const MyApp()` aunque `MyApp` no declara un constructor `const`.
- **Identificadores por defecto:** el paquete se llama `myapp` y el `applicationId` de Android es `com.example.myapp`. Cámbialos antes de publicar en una tienda.
- **Build de release:** está firmado con las claves de debug.

## Contribuciones

1. Haz un fork del repositorio.
2. Crea una rama: `git checkout -b mi-mejora`.
3. Haz tus cambios y commitea.
4. Envía un pull request.

## Licencia

Pendiente de definir. Agrega un archivo `LICENSE` (por ejemplo, MIT) y actualiza esta sección.
