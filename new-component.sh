NAME=$1
cd ./src/components
mkdir $NAME
cd $NAME
cp ../component-template.tsx $NAME.tsx
cp ../component-template.css $NAME.css
sed -i.bak "s/COMPONENTTEMPLATE/$NAME/g" $NAME.tsx
sed -i.bak "s/COMPONENTTEMPLATE/$NAME/g" $NAME.css
rm $NAME.tsx.bak
rm $NAME.css.bak
cd ../../..
echo "import $NAME from './components/$NAME/$NAME'"
echo "import $NAME from '../$NAME/$NAME'"