controladdin "Base Control"
{
    RequestedHeight = 600;
    RequestedWidth = 600;
    MaximumHeight = 1200;
    MinimumHeight = 200;

    VerticalStretch = true;
    VerticalShrink = true;
    HorizontalStretch = true;
    HorizontalShrink = true;

    StartupScript = 'Scripts/startup.js';
    Scripts = 'Scripts/baseControl.js',
              'Scripts/d3.min.js';
    StyleSheets = 'Styles/baseControl.css';

    procedure SetCaption(name: Text);
    procedure CreateSVG();
    procedure DancingDots();

    event OnControlReady();
    event OnButtonClick();

}