import "./SettingButton.css";

export default function SettingButton({avatar}) {

    return (
        <div className="settingButton">
            <div className="settingButton__user">
                <img src={avatar} alt="" className="settingButton__user__avatar"/>
            </div>
        </div>
    )

}