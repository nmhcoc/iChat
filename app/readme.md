# mPointMobileApp Project

## I. setup Environment React Native 

[https://facebook.github.io/react-native/docs/getting-started.html](https://facebook.github.io/react-native/docs/getting-started.html)
====================================================================================>
### II. build Release App
#### 1. Android 

[https://facebook.github.io/react-native/docs/signed-apk-android.html](https://facebook.github.io/react-native/docs/signed-apk-android.html)

#### 2. IOS
* step 1: Open mpoint.xcodeproj on mPointMobileApp/ios folder by Xcode. 
* step 2: Choose Generic IOS decive on decive cell in top left.
* step 3: Tap Product on menubar then select Archive.
* step 4: Wait a few minutes. Let's take of coffe ...  ☠ 
* Done -> Upload to Store.
##### ====================================================================================>
### III. Intergrate Lib
#### Intergrate Firebase 
* step 1: Download Firebase SDK and extract it.
* step 2: Drag FireBase , FireBase Core and Firebase.h to project
* step 3: folow [this](https://github.com/evollu/react-native-fcm)
#####
====================================================================================>

#### Intergrate Google maps
* step 1: copy duplicate project.
* step 2: in copy folder goto ios and type pod init in commandline.
* step 3: edit Podfile and add pod 'GoogleMaps'
* step 4: type "pod insall" and wait a few minutes.
* step 5: goto ios/Pods/Googlemaps/Maps/FrameWork and drag all item to Framework folder in real Project select "Copy if needed" and check Create group.
* step 6: Folow [this](https://github.com/airbnb/react-native-maps/blob/master/docs/installation.md#user-content-option-3-manually)

``` 
The doc was writen by Nguyen Manh Hung