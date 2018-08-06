// @flow

import React, { PureComponent } from "react";
import _ from "lodash";
import { Route, Link } from "react-router-dom";
import type { Location, History } from "react-router";
import TagItemContainer from "../containers/TagItemContainer";

type Props = {
  tags: Array<{
    id: string,
    tagGroup: string,
    titleRU: string,
    titleEN: string,
    language: string,
    tagSelected: boolean
  }>,
  location: Location,
  history: History
};

class TagsPanel extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const filterTags = _(this.props.tags)
      .groupBy(x => x.tagGroup)
      .map((value, key) => ({ tagGroup: key, tags: value }))
      .value();
    return (
      <div>
        {filterTags.map(filterTag => (
          <ul key={filterTag.tagGroup}>
            {filterTag.tags.map(item => (
              <TagItemContainer
                key={item.id}
                item={item}
                location={this.props.location}
                history={this.props.history}
              />
            ))}
          </ul>
        ))}
      </div>
    );
  }
}

export default TagsPanel;
