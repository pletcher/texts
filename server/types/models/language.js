import {_} from 'underscore';
import { GraphQLObjectType, GraphQLNonNull, GraphQLList, GraphQLSchema, GraphQLInt, GraphQLString } from 'graphql';
import { attributeFields} from 'graphql-sequelize';

import Language from '../../models/language';

const languageType = new GraphQLObjectType({
	name: 'Language',
	description: 'A language',
	fields: _.assign(attributeFields(Language)),
});

export default languageType;
