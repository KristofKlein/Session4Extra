page 50144 "Test Control"
{
    Caption = 'Javascript!';
    PageType = Card;
    ApplicationArea = All;
    UsageCategory = Administration;
    layout
    {
        area(Content)
        {
            usercontrol(BaseControl; "Base Control")
            {
                trigger OnControlReady();
                begin
                    CurrPage.BaseControl.SetCaption('Dance!');
                    CurrPage.BaseControl.CreateSVG();
                end;

                trigger OnButtonClick();
                begin
                    CurrPage.BaseControl.DancingDots();

                end;
            }
        }
    }
}