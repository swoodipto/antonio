> This mod breaks in Vivaldi 3.3. I will try my best to update it ASAP.

> This is a sandboxed version of the mod where fixes, enhancements etc. are pushed.

# 🎻 Antonio
_A Vivaldi mod, almost Safari, but its not._

![Antonio. Vivaldi Mod.](https://raw.githubusercontent.com/otpidusprime/antonio/master/img/antonio-preview.png)

## ⬇️ Mod Installation:

### Prepare Vivaldi with the following Settings/Preferances:

- **THEMES**
    - Select any theme and click **_"Edit Theme"_**.
    - Under **Theme Preferences**, check **_"Accent Color from Active Page"_**.
    - Keep "Apply Accent Color to Window" and "Transparent Tabs" unchecked.
- **TABS**
    - Set **Tab Bar Position** to **_"Top"_**.
    - Under **Tab Display**; set **Page Load Progress** to **_"None"_**.
- **ADDRESS BAR**
    - Check **_"Show Address Bar"_**.
    - Set **Address Bar Position** to **_"Top"_**.
    - Under **Address Bar Options**, check **_"Select Address on Activation"_** and **_"Page Load Progress Bar"_**; rest unchecked.

### Mod Vivaldi using the CSS:

- Clone or Download ZIP or Copy the contents of [custom.css](https://github.com/otpidusprime/antonio/blob/master/custom.css).
- Move the `custom.css` file to any folder on your computer.

#### Vivaldi 2.6 and above:

- Open Vivaldi.
- Go to `vivaldi://experiments`.
- Check **_"Allow for using CSS modifications"_**.
- Open **Appearance** section in Vivaldi Settings/Preferences.
- Scroll down to **Custom UI Modifications** section at the bottom.
- Choose the folder you moved the `custom.css` file to.
- Restart Vivaldi to see the mod in effect.

#### Vivaldi 2.5 and earlier:

- Go to the application folder and open `browser.html` in a code editor.
- Inside `<head>`, add the following:
    ```
    <link rel="stylesheet" href="style/custom.css" />
    ```
- Add the `custom.css` file to the style folder of Vivaldi

The above guide is from this [Vivaldi community post](https://forum.vivaldi.net/topic/10549/modding-vivaldi).

## ℹ️ More Information:

Read the story behind this Mod [on my Blog](https://wp.me/padUp4-Bw).

## 🌟 Changelog:

### [v1.0](https://github.com/otpidusprime/antonio/releases/tag/v1.0)

- Initial release