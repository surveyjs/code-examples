Survey.SvgRegistry.renderIcons();

ReactDOM.render(
  <div>
    {
      Object.keys(Survey.SvgRegistry.icons).map(name => {
        return (
          <div class="container">
            <SurveyReact.SvgIcon
              iconName={"icon-" + name}
              size={"auto"}
              className={"sd-detail-panel__icon"}
            />
            <span className={"icon-name"}>{"icon-" + name}</span>
          </div>
        )
      })
    }
  </div>,
  document.getElementById("icons")
);