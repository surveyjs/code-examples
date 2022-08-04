Survey.SvgRegistry.renderIcons();

ReactDOM.render(
  <div>
    {Object.keys(Survey.SvgRegistry.icons).map(function(name) {
        return <div><SurveyReact.SvgIcon iconName={"icon-" + name}
    size={"auto"} className={"sd-detail-panel__icon"}
    />{"icon-" + name}</div>;
    })}
  </div>
, document.getElementById("creatorElement"));