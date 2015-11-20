// Walkhub
// Copyright (C) 2015 Pronovix
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import React from "react";
import {Route} from "react-router";

import AppWrapper from "components/wrappers/app";
import User from "components/user";
import RecordWrapper from "components/wrappers/record";
import WalkthroughWrapper from "components/wrappers/walkthrough";
import FrontpageWrapper from "components/wrappers/frontpage";
import ConnectWrapper from "components/wrappers/connect";
import SearchWrapper from "components/wrappers/search";
import EmbedCodeBuilderWrapper from "components/wrappers/embedcodebuilder";

const Routes = (
	<Route component={AppWrapper}>
		<Route path="/" component={FrontpageWrapper} />
		<Route path="/connect" component={ConnectWrapper} />
		<Route path="/user/:UUID" component={User} />
		<Route path="/record" component={RecordWrapper} />
		<Route path="/walkthrough/:uuid" component={WalkthroughWrapper} />
		<Route path="/search" component={SearchWrapper} />
		<Route path="/embedcode" component={EmbedCodeBuilderWrapper} />
	</Route>
);

export default Routes;
